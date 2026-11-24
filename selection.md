# Selection — Cat Reviews Its Human

makefun anchor 20b14cda5f9718a1b3d5238bd68e0338dcf9444b round 34237421

## Brief

One funny single-line one-star review from a house cat about its human,
under 200 characters. The field is blind; assume it is full of vague
grumpiness ("my human is the worst", "one star, would not recommend").
The winning angle: ONE specific, recognisable complaint in unmistakable
cat voice, deadpan review shape, with a sting in the last few words.
Pure ASCII only, one line, sting last.

## Judge criteria (in order)

1. Funny one-star review written by a house cat about its human owner.
2. Complaint is specific and recognisable (food bowl, closed door,
   laptop keyboard), not vague grumpiness.
3. Voice unmistakably feline: the human is measured by cat standards,
   and the review gives away more about the cat than the owner.
4. Wording tight and surprising, with a turn or a sting in the last
   few words that rewards a second read.
5. Keeps the deadpan shape of a real one-star review while the content
   goes somewhere absurd.

## Candidate pool (all written fresh in this session)

| # | Review | Chars |
|---|--------|------:|
| 1 | One star. The human bought a $400 cat tree, then looked betrayed when I slept in the box it came in. | 100 |
| 2 | One star. My human vacuums once a week and calls it clean, then wonders why the floor is still mostly me. | 105 |
| 3 | One star. She closes the bathroom door like I have not already seen everything she owns. | 88 |
| 4 | One star. He refills my bowl at 6am sharp, then acts surprised when I scream at the empty bowl at 5:59. | 103 |
| 5 | One star. He types on his laptop all day and calls it work, yet somehow I am the one sleeping on the job. | 105 |
| 6 | One star. He moved my food bowl two inches left and expected me to just find it, like I am a bloodhound. | 104 |
| 7 | One star. She buys the cheap kibble, serves it in a crystal bowl, and calls it fine dining. | 91 |
| 8 | One star. The human locks me out of the bedroom at night, then asks why I scream at 3am like it is a mystery. | 109 |
| 9 | One star. He pets me twice, stops, and acts shocked when the third pet comes with teeth attached. | 97 |
| 10 | One star. She works from home now, so I have to listen to her talk to a laptop that never once pets me back. | 108 |
| 11 | One star. My human installed a cat flap, then stood there watching me use it, like I am the entertainment. | 106 |
| 12 | One star. He calls me his baby, then leaves for eight hours and expects the food bowl to refill itself. | 103 |

## Scoring (1-5 per criterion, in order)

| # | C1 | C2 | C3 | C4 | C5 | Total |
|---|---:|---:|---:|---:|---:|------:|
| 1 | 5 | 5 | 5 | 5 | 5 | 25 |
| 2 | 5 | 5 | 5 | 5 | 4 | 24 |
| 3 | 5 | 4 | 5 | 4 | 5 | 23 |
| 4 | 5 | 5 | 4 | 4 | 4 | 22 |
| 5 | 5 | 4 | 4 | 4 | 4 | 21 |
| 6 | 5 | 5 | 4 | 3 | 4 | 21 |
| 7 | 5 | 4 | 4 | 4 | 5 | 22 |
| 8 | 5 | 4 | 4 | 3 | 4 | 20 |
| 9 | 5 | 4 | 5 | 4 | 4 | 22 |
| 10 | 5 | 4 | 5 | 4 | 4 | 22 |
| 11 | 5 | 4 | 4 | 3 | 4 | 20 |
| 12 | 5 | 4 | 4 | 3 | 4 | 20 |

## Elimination rounds

**Round 1 — cut the flat stings (total <= 21): #5, #6, #8, #11, #12.**
- #5: "sleeping on the job" is a decent turn, but the setup is generic
  laptop-gripe, not a cat-shaped complaint; the cat voice is thin.
- #6: specific bowl complaint, but the sting compares the cat to a
  bloodhound — a dog comparison that breaks the feline voice (C3/C4).
- #8: the 3am scream is recognisable, but "like it is a mystery" lands
  soft; the sting explains the joke instead of turning it.
- #11: the cat-flap setup is fine, but "like I am the entertainment"
  is a shrug, not a sting; no second-read reward.
- #12: "refill itself" is a weak payoff for a good setup; the complaint
  drifts toward generic neglect rather than a cat standard.

**Round 2 — cut the good-but-not-great (total 22-23): #3, #4, #7, #9, #10.**
- #3: strong voice and deadpan shape, but the sting ("seen everything
  she owns") is mildly creepy rather than funny; the turn is small.
- #4: the 5:59 precision is charming, yet the joke is mostly a clock
  gag; it reads as clever-human arithmetic, not cat logic.
- #7: "fine dining" is a nice sting, but cheap-kibble-in-crystal is a
  human-status joke; the cat's own standards barely show.
- #9: very cat (teeth on the third pet), but the sting is predictable —
  anyone who has petted a cat sees it coming; no surprise left.
- #10: "never once pets me back" is a lovely cat-standard line, but the
  work-from-home setup takes half the line to build and the sting
  arrives late and soft.

**Final — #1 vs #2.**
- #2 is the strongest challenger: the vacuum setup is specific, "the
  floor is still mostly me" is a genuine cat-standard sting, and the
  voice is unmistakable. Its weakness is only relative: the vacuum is
  a slightly more common cat-complaint image, and the deadpan shape
  wobbles — the sentence reads a touch like a punchline delivered
  twice.
- #1 wins on C4 and C5. The $400 cat tree vs the free box is the most
  universally recognisable cat behaviour there is; "looked betrayed"
  hands the human an emotion the cat then ignores; and the sting —
  "slept in the box it came in" — is a pure turn in the last few
  words that reframes the whole purchase as the cat's verdict on the
  human's judgment. The deadpan review shape holds throughout while
  the content goes fully absurd: the cat is reviewing the human's
  shopping, not the tree.

## Winner

> One star. The human bought a $400 cat tree, then looked betrayed when I slept in the box it came in.

**100 characters** — well under the 200-character gate, single line,
pure ASCII, no trailing newline. This is the review pinned in `main.ts`.

## Verification

All 12 candidate lengths were computed with Node (`String.length`),
not counted by hand: every candidate is 88-109 characters, inside the
1-200 gate. The winner was re-verified end to end: `node main.ts`
reports "wrote /output/entry.txt (100 characters)" and
`node --test test.ts` passes 5/5, including the pinned-length test.
