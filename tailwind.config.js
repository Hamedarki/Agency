/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 7% ": { transform: "rotateZ(0)" },
                    "15% ": { transform: "rotateZ(-15deg)" },
                    "20% ": { transform: "rotateZ(10deg)" },
                    "25% ": { transform: "rotateZ(-10deg)" },
                    "30% ": { transform: "rotateZ(6deg)" },
                    "35%": { transform: "rotateZ(-4deg)" },
                    "40%, 100%": { transform: "rotateZ(0)" },
                }
            },

            fontSize: {
                "font-size110p": '110px',
            },
            borderWidth: {
                "border1px": "1px",
            },
            width: {
                "width-136p": '136px',
                "width-134p": '134px',
                "width-138p": '138px',
                "width-391p": '391px',
                "width-270p": '270px',
                "width-320p": '320px',
                "width-80%": '80vw',
                "width-154p": "154px",
                "width-350p": "350px"
            },
            height: {
                "height-48p": "48px",
                "height-168p": "168px",
                "height-176p": "176px",
                "height-160p": "160px",
                "height-200p": '200px',
                "height-260p": "260px",
                "height-50%": "50vh",
                "height-7000p": "200px",
                "height-400p": "400px",
            },

            colors: {
                "text-dark": ' #391400 ',
                "brown-color": '#5C2000',
                "text-dark-accient": '#EF6D58',
                "primary-color": '#B550F8',
                "white-color": '#ffffff',
                "secondary-color": '#F3D1BF',
                "yellow-color": '#f6d021',
                "light-purple": '#3A3C56',
                "dark-purple": '#28293E',
                "grey-color": '#D8D8D8',
                "dark-grey-color": '#9B9B9B',
                "light-grey-color": '#B3B3B3'

            },


        },
    },
    plugins: [],
}