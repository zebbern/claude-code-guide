#!/usr/bin/env python3
"""
The first-client gate.

Before you touch this skill, answer one question honestly.
Your client #0 is YOU — the person building the product.
If you don't know that yet, you're not ready for the skill.
"""
import sys


def ask(question):
    a = input(question + " [y/n]: ").strip().lower()
    return a.startswith("y")


print()
print("=" * 44)
print("   THE FIRST-CLIENT GATE")
print("=" * 44)
print()

print("Do you have your first client yet?")
if not ask("Answer"):
    print()
    print("Then the door stays shut.")
    print("Your client #0 is YOU. Go use your own product.")
    print("Come back when the answer is yes.")
    sys.exit(0)

print()
print("Who is it?")
who = input("Name (or type 'me' if it's you): ").strip().lower()

print()
if who in ("me", "myself", "i", "я", "я сам", "себе"):
    print("Correct. You are your own first client.")
    print("The door opens.")
else:
    print(f"Good — a real first client. The door opens.")

print()
print("=" * 44)
print("   WELCOME. THE SKILL IS YOURS.")
print("=" * 44)
print()
print("Client #1 comes by hand and free. Then 2-10 by")
print("copying the competitors working your exact audience.")
print()
