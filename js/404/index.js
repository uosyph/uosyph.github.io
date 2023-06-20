import { TextScrambler } from "../utils/scrambler.js";

// Scrambles and rotates through an array of phrases
// with a random delay, using the TextScrambler class.
function scrambleText() {
	const phrases = [
		["не найдено"],
		["未找到"],
		["見つかりません"],
		["ατελείωτες δυνατότητες"],
		["Houston, We have a problem!"],
		[
			"What are you looking for?",
			"There is nothing to see here.",
			"If you haven't found it yet,",
			"Just keep looking.",
		],
		[
			"( ಠ_ಠ)",
			"(ʘ_ʘ)",
			"σ_σ",
			"Σ(ﾟДﾟ )",
			"ヽ(ｏ`皿′ｏ)ﾉ",
			"（ つ Д ｀）",
			"(ΘεΘ;)",
			"¯\\(º o)/¯",
		],
		["....-", "-----", "....-"],
		["-.", "---", "-", ".......", "..-.", "---", "..-", "-.", "-.."],
	];

	const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
	const el = document.querySelector(".text");
	const fx = new TextScrambler(el);
	let counter = 0;

	const scramble = () => {
		const randomTimeout = Math.floor(Math.random() * 2000) + 500;

		fx.setText(randomPhrase[counter]).then(() => {
			setTimeout(scramble, randomTimeout);
		});
		counter = (counter + 1) % randomPhrase.length;
	};
	scramble();
}

// Calls the function
scrambleText();
