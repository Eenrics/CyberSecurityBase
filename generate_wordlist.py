austen = [
    "Elizabeth", "Darcy", "Bennet", "Wickham", "Bingley", "Jane", "Lydia"
]

nhl = [
    "Crosby", "McDavid", "Kane", "Matthews", "Ovechkin", "Bergeron", "Draisaitl"
]

words = set()

for a in austen:
    for n in nhl:
        # normal combinations
        words.add(a + n)

        # reversed combinations
        words.add(n + a)

        # lowercase versions
        words.add((a + n).lower())
        words.add((n + a).lower())

        # underscore variations
        words.add(a + "_" + n)
        words.add(n + "_" + a)

        # dot variations
        words.add(a + "." + n)
        words.add(n + "." + a)

        # simple number additions (common CTF pattern)
        for year in ["1775", "1813", "1990", "2000", "21"]:
            words.add(a + n + year)
            words.add(n + a + year)

with open("wordlist.txt", "w") as f:
    for w in sorted(words):
        f.write(w + "\n")

print(f"Generated {len(words)} passwords")