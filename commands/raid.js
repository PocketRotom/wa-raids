const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("raid")
		.setDescription("Start a Raid")
		.addStringOption((option) =>
			option
				.setName("code-8-digits")
				.setDescription("The code you will use on the raid")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("pokemon")
				.setDescription("The Pokémon of the raid")
				.setRequired(true)
		)
		.addStringOption((option) =>
			option
				.setName("teratype")
				.setDescription("The teratype of the raid")
				.setRequired(true)
				.addChoices(
					{ name: "Bug", value: "Bug" },
					{ name: "Dark", value: "Dark" },
					{ name: "Dragon", value: "Dragon" },
					{ name: "Electric", value: "Electric" },
					{ name: "Fairy", value: "Fairy" },
					{ name: "Fighting", value: "Fighting" },
					{ name: "Fire", value: "Fire" },
					{ name: "Flying", value: "Flying" },
					{ name: "Ghost", value: "Ghost" },
					{ name: "Grass", value: "Grass" },
					{ name: "Ground", value: "Ground" },
					{ name: "Ice", value: "Ice" },
					{ name: "Normal", value: "Normal" },
					{ name: "Poison", value: "Poison" },
					{ name: "Psychic", value: "Psychic" },
					{ name: "Rock", value: "Rock" },
					{ name: "Steel", value: "Steel" },
					{ name: "Water", value: "Water" }
				)
		)
		.addStringOption((option) =>
			option
				.setName("raidlevel")
				.setDescription("The level of the raid")
				.setRequired(true)
				.addChoices(
					{ name: "1", value: "1" },
					{ name: "2", value: "2" },
					{ name: "3", value: "3" },
					{ name: "4", value: "4" },
					{ name: "5", value: "5" },
					{ name: "6", value: "6" },
					{ name: "7", value: "7" }
				)
		),
	async execute(interaction) {
		const code = interaction.options.getString("code-8-digits")
		const pokemon = interaction.options.getString("pokemon")
		const teratype = interaction.options.getString("teratype")
		const raidlevel = interaction.options.getString("raidlevel")
		await interaction.reply(
			`Starting a Lv ${raidlevel} raid of ${pokemon} with ${teratype} terastal, with code ${code}`
		)
	},
}
