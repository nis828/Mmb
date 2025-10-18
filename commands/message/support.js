const { EmbedBuilder } = require('discord.js');
const shiva = require('../../shiva');

const COMMAND_SECURITY_TOKEN = shiva.SECURITY_TOKEN;

module.exports = {
    name: 'support',
    description: 'Get support server and contact information',
    securityToken: COMMAND_SECURITY_TOKEN,
    
    async execute(message) {
        if (!shiva || !shiva.validateCore || !shiva.validateCore()) {
            const embed = new EmbedBuilder()
                .setDescription('❌ System core offline - Command unavailable')
                .setColor('#FF0000');
            return message.reply({ embeds: [embed] }).catch(() => {});
        }

        message.shivaValidated = true;
        message.securityToken = COMMAND_SECURITY_TOKEN;

        try {
            const embed = new EmbedBuilder()
                .setTitle('🛠️ Support & Contact')
                .setColor(0x1DB954)
                .setDescription(
                    'Need help or have questions? Join our official support server:\n' +
                    '[Support Server](https://discord.gg/mJYHu9VEME)\n\n' +
                    'For direct inquiries, contact: **nis**\n\n' +
                    '@.nis_'
                )
                .setTimestamp()
                .setFooter({ text: 'Melomi Music Bot • Developed by nis' });
            
            await message.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Support command error:', error);
            await message.reply('❌ An error occurred while fetching support information.');
        }
    }
};


