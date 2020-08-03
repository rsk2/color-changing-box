const colorList = [
    {
        color: "AliceBlue",
        hex: "#F0F8FF"
    },
    {
        color: "BurlyWood",
        hex: "#DEB887"
    },
    {
        color: "Chartreuse",
        hex: "#7FFF00"
    },
    {
        color: "Cyan",
        hex: "#00FFFF"
    },
    {
        color: "DarkGoldenRod",
        hex: "#B8860B"
    },
    {
        color: "DarkOrange",
        hex: "#FF8C00"
    },
    {
        color: "DeepSkyBlue",
        hex: "#00BFFF"
    },
    {
        color: "GreenYellow",
        hex: "#ADFF2F"
    },
    {
        color: "IndianRed",
        hex: "#CD5C5C"
    },
    {
        color: "Khaki",
        hex: "#F0E68C"
    },
    {
        color: "LawnGreen",
        hex: "#7CFC00"
    },
    {
        color: "LightPink",
        hex: "#FFB6C1"
    },
    {
        color: "LightSlateGrey",
        hex: "#778899"
    },
    {
        color: "MediumPurple",
        hex: "#9370DB"
    },
    {
        color: "Navy",
        hex: "#000080"
    },
    {
        color: "Orange",
        hex: "#FFA500"
    },
    {
        color: "PaleVioletRed",
        hex: "#DB7093"
    },
    {
        color: "RebeccaPurple",
        hex: "#663399"
    },
    {
        color: "Red",
        hex: "#FF0000"
    },
    {
        color: "RoyalBlue",
        hex: "#4169E1"
    },
    {
        color: "Silver",
        hex: "#C0C0C0"
    },
    {
        color: "SlateBlue",
        hex: "#6A5ACD"
    },
    {
        color: "Tan",
        hex: "#D2B48C"
    },
    {
        color: "Turquoise",
        hex: "#40E0D0"
    },
    {
        color: "Violet",
        hex: "#EE82EE"
    },
    {
        color: "White",
        hex: "#FFFFFF"
    },
    {
        color: "Yellow",
        hex: "#FFFF00"
    }

]

export default () =>
  Promise.resolve(colorList[Math.floor(Math.random()*colorList.length)]);