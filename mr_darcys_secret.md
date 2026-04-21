# Mr. Darcy's Secret

## Challenge

It is a truth universally acknowledged, that a man in possession of a good fortune, must be in want of a public-private cryptosystem. Mr. Darcy has chosen his RSA modulus `n = 1829`, and a public key `e = 83`. He receives a cipher `1151` that has been encrypted with her public key. What is the plaintext?

## Given Values

- RSA modulus: `n = 1829`
- Public exponent: `e = 83`
- Ciphertext: `c = 1151`

We want to recover the plaintext `m`.

## Step 1: Factor the modulus

To compute the private key, factor `n`:

`1829 = 31 x 59`

So:

- `p = 31`
- `q = 59`

## Step 2: Compute Euler's totient

For RSA:

`phi(n) = (p - 1)(q - 1)`

So:

`phi(1829) = (31 - 1)(59 - 1) = 30 x 58 = 1740`

## Step 3: Find the private exponent

We need `d` such that:

`83d ≡ 1 mod 1740`

Use the extended Euclidean algorithm:

`1740 = 83 x 20 + 80`

`83 = 80 x 1 + 3`

`80 = 3 x 26 + 2`

`3 = 2 x 1 + 1`

Back-substitute:

`1 = 3 - 2`

`2 = 80 - 3 x 26`

`1 = 3 - (80 - 3 x 26) = 27 x 3 - 80`

`3 = 83 - 80`

`1 = 27 x (83 - 80) - 80 = 27 x 83 - 28 x 80`

`80 = 1740 - 83 x 20`

`1 = 27 x 83 - 28 x (1740 - 83 x 20)`

`1 = 587 x 83 - 28 x 1740`

Therefore:

`587 x 83 ≡ 1 mod 1740`

So the private exponent is:

`d = 587`

## Step 4: Decrypt the ciphertext

RSA decryption uses:

`m = c^d mod n`

So:

`m = 1151^587 mod 1829`

We compute this using modular arithmetic with the Chinese Remainder Theorem.

### Modulo 31

`1151 mod 31 = 4`

So:

`1151^587 mod 31 = 4^587 mod 31`

Since `phi(31) = 30`:

`587 mod 30 = 17`

Thus:

`4^587 mod 31 = 4^17 mod 31`

Compute:

`4^2 = 16 mod 31`

`4^4 = 16^2 = 256 ≡ 8 mod 31`

`4^8 = 8^2 = 64 ≡ 2 mod 31`

`4^16 = 2^2 = 4 mod 31`

`4^17 = 4^16 x 4 ≡ 4 x 4 = 16 mod 31`

So:

`m ≡ 16 mod 31`

### Modulo 59

`1151 mod 59 = 30`

So:

`1151^587 mod 59 = 30^587 mod 59`

Since `phi(59) = 58`:

`587 mod 58 = 7`

Thus:

`30^587 mod 59 = 30^7 mod 59`

Compute:

`30^2 = 900 ≡ 15 mod 59`

`30^4 ≡ 15^2 = 225 ≡ 48 mod 59`

`30^7 = 30^4 x 30^2 x 30 ≡ 48 x 15 x 30 mod 59`

`48 x 15 = 720 ≡ 12 mod 59`

`12 x 30 = 360 ≡ 6 mod 59`

So:

`m ≡ 6 mod 59`

## Step 5: Recombine with the Chinese Remainder Theorem

We now solve:

- `m ≡ 16 mod 31`
- `m ≡ 6 mod 59`

Let:

`m = 16 + 31k`

Substitute into the second congruence:

`16 + 31k ≡ 6 mod 59`

`31k ≡ -10 ≡ 49 mod 59`

The inverse of `31 mod 59` is `40`, so:

`k ≡ 49 x 40 mod 59`

`49 x 40 = 1960 ≡ 13 mod 59`

So:

`k = 13`

Then:

`m = 16 + 31 x 13 = 16 + 403 = 419`

## Final Answer

The plaintext is:

`419`
