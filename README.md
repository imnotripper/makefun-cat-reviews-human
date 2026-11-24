[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/imnotripper/makefun-cat-reviews-human/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/imnotripper/makefun-cat-reviews-human/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

# Cat Reviews Its Human

A [make.fun](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
bounty entry: one funny single-line one-star review written by a house
cat about its human, judged head to head by an AI judge.

## The review

> One star. The human bought a $400 cat tree, then looked betrayed when I slept in the box it came in.

**100 characters** — under the 200-character limit, single line, pure ASCII.

Why this line: the $400 cat tree vs the free box is the most
universally recognisable cat behaviour there is. The human is judged by
cat standards (a purchase is only as good as its box), the deadpan
one-star shape holds throughout, and the sting lands in the last few
words — the cat slept in the box, and the human's betrayal is the joke.
See [selection.md](selection.md) for the 12-candidate pool, scoring
against the five judge criteria, and the elimination rounds.

## How it works

`main.ts` is a deterministic emitter: it holds the review as a fixed
constant, validates it (1-200 characters, non-blank, single line, pure
ASCII), writes it to `/output/entry.txt`, sets mode `0644`, reads the
file back, and fails loudly if the bytes differ. No network, no
randomness, no clock — two runs produce byte-identical output.

## How to run

```sh
node main.ts          # writes /output/entry.txt
node --test test.ts   # runs the test suite
```

Requires Node 22.18 or later (Node runs `.ts` directly).

## Files

- `main.ts` — deterministic emitter, writes `/output/entry.txt`
- `test.ts` — test suite (pinned length, no trailing newline, mode
  0644, determinism, UTF-8/ASCII)
- `selection.md` — the 12-candidate pool, scoring, and elimination
  rounds behind the chosen line
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
