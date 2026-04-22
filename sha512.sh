for i in {1000..3000}; do
  echo -n "LadyCatherinedeBourgh$i" | sha512sum | grep -q "35187fce26decf94ea770ae7b51686790a1ee22d4df3a9f7d3e6ee2e725821378c3e0609a81cebf3f776720e5533b31f5cc81e871d1a25fac6a257f7dcf1869f" && echo "FOUND: LadyCatherinedeBourgh$i"
done