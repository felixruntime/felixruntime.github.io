---
title: "The Turing Test and the Birth of AI"
date: 2026-02-23
draft: false
description: "1950s — when Alan Turing asked 'Can machines think?' and started everything."
tags: ["ai-history", "turing", "dartmouth", "lisp"]
series: ["Origins of AI"]
series_order: 1
summary: "The question that launched an entire field. How the 1950s laid the intellectual foundations for artificial intelligence."
---

## Giant Brains, or Machines That Think


As technological advances surged in the late 1940s, so did curiosity about what these machines truly were. In 1949, professor **Edmund Callis Berkeley** published *Giant Brains, or Machines That Think* — a book that introduced the general public to the potential of mechanical brains. For Berkeley, the computers of that era were already remarkable: performing the work of hundreds of people, solving complex problems in science, business, and government.

The question was no longer *if* machines could be useful. It was whether they could *think*.


{{< figure src="giant-brains.jpg" alt="Giant Brains book cover" caption="Giant Brains, or Machines That Think — Edmund C. Berkeley, 1949" figureClass="mx-auto text-center" >}}

## Alan Turing and The Imitation Game (1950)

In 1950, **Alan Turing** published his landmark paper *"Computing Machinery and Intelligence"*, where he proposed a practical way to test whether a machine could exhibit intelligent behavior — **The Imitation Game**.

Before introducing the machine into the equation, Turing described a social game common at the time. Three participants are involved: a man (**A**), a woman (**B**), and an interrogator (**C**) of any gender.

> **Setup:** The interrogator sits in a separate room and communicates with A and B only through text — so they can't recognize voices.
>
> **The Goal:** The interrogator must figure out who is the man and who is the woman by asking questions.
>
> **The Roles:**
> - The man (**A**) tries to *deceive* the interrogator, pretending to be the woman.
> - The woman (**B**) tries to *help* the interrogator, answering as honestly as possible.

Then Turing posed the real question:

*What would happen if we replaced A or B with a machine? Would the interrogator be wrong just as often as when the game is played between a man and a woman?*

This became known as the **Turing Test** — and it remains one of the most referenced benchmarks in AI to this day.

## The Dartmouth Conference (1955)

In 1955, **John McCarthy** organized a workshop at Dartmouth College, bringing together the leading minds working on machine intelligence. This was the moment the term **"Artificial Intelligence"** was used for the first time.

The Dartmouth Conference didn't produce a breakthrough algorithm or a working AI system. What it did was far more important: it established AI as a formal academic discipline and gave the field a name, a community, and a direction.

## LISP — The Language of AI Research (1958)

McCarthy didn't just name the field — he built tools for it. In 1958, he created **LISP** (List Processing), the first programming language designed specifically for AI research:

```lisp
;; Define a function to find the nth Fibonacci number
(defun fibonacci (n)
  (if (< n 2)
      n
      (+ (fibonacci (- n 1))
         (fibonacci (- n 2)))))

;; Print the 10th Fibonacci number to the console
(format t "The 10th Fibonacci number is: ~A~%" (fibonacci 10))
```

LISP introduced concepts that are now standard in modern programming: recursion, dynamic typing, garbage collection, and tree data structures. It remained the dominant language in AI research for decades.

A fun fact: LISP was later adapted into **Elisp**, the language that powers the text editor **Emacs** — still used by programmers today.

## The Early Pioneers

The 1950s also saw the first practical demonstrations of machine learning:

- **Arthur Samuel (1952)** developed a checkers-playing program that could learn and improve on its own — the earliest example of self-teaching software.
- **Samuel (1959)** coined the term **"machine learning"**, describing methods for teaching computers to surpass their human programmers.

## The Era of Optimism

By the end of the 1950s, the mood was electric. Machines were playing games, solving mathematical proofs, and processing language. Researchers genuinely believed that human-level AI was just around the corner.

That optimism would eventually meet reality — but that's a story for the [next post](/blog/origins-02-first-winter/).

---

## References

- [The History of Artificial Intelligence — Tableau](https://www.tableau.com/data-insights/ai/history)
- [John McCarthy — Computer History Museum](https://computerhistory.org/profile/john-mccarthy/)
- [Artificial Intelligence (AI) Coined at Dartmouth — Dartmouth College](https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth)

---

*This is post 1 of the [Origins of AI](/series/origins-of-ai/) series — tracing the history of artificial intelligence from the 1950s to the agentic systems of today.*
