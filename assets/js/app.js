import * as bin from './bin/index.js';
import config from '../../config.js';

$(document).ready(function() {
	const promptUsername = `<span class="text-yellow">${config.ps1_username}</span>`;
	const promptHostname = `<span class="text-green">${config.ps1_hostname}</span>`;
	const promptLabel = `${promptUsername}@${promptHostname}:$ ~ `;
	/* Fifth console */
	var console1 = $('#console1');
	var controller = console1.console({
		autofocus: true,
		promptLabel: promptLabel,
		commandHandle: async function(arg) {
			const args = arg.split(" ");
			if (args[0] == "clear") {
				controller.clearScreen();
			} else if (onlyNumberCalculation(arg)) {
				try {
					return [{
						msg: eval(arg),
						className: "jquery-console-message-value"
					}];
				} catch {
					return [{
						msg: `shell: command not found: ${args[0]}. Try 'help' to get started.`,
						className: "jquery-console-message-value"
					}];
				}
			} else if (Object.keys(bin).indexOf(args[0]) === -1) {
				return [{
					msg: `shell: command not found: ${args[0]}. Try 'help' to get started.`,
					className: "jquery-console-message-value"
				}];
			} else {
				const output = await bin[args[0]](args.slice(1));
				return [{
					msg: output,
					className: "jquery-console-message-value"
				}];
			}
		},
		welcomeMessage: bin.banner(),
	});

	function onlyNumberCalculation(str) {
		return /^[\s\d()+%\/*.-]*$/.test(str);
	}
})