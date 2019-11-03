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
    }

]

export default () =>
  Promise.resolve(colorList[Math.floor(Math.random()*colorList.length)]);