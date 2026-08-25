import {defineConfig} from 'unocss';

export default defineConfig({
    theme: {
        colors: {
            smu: {
                primaryBlue: 'var(--smu-primary-blue)',
                primaryRed: 'var(--smu-primary-red)',
                secondaryYellow: 'var(--smu-secondary-yellow)',
                secondaryRed: 'var(--smu-secondary-red)',
                secondaryBlue: 'var(--smu-secondary-blue)',
                dark: 'var(--smu-dark)',
                light: 'var(--smu-light)'
            }
        }
    },
    preflights: [
        {
            getCSS: () => `
                    :root {
                    --smu-primary-blue: #354CA1;
                    --smu-primary-red: #CC0035;
                    --smu-secondary-yellow: #F9C80E;
                    --smu-secondary-red: #FF1053;
                    --smu-secondary-blue: #59C3C3;
                    --smu-dark: #262626;
                    --smu-light: #FFFFFF;
                    }
                `,
        }
    ]
})