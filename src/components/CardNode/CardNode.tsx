import React from 'react'
import {CardActions, CardContent, Typography} from "@mui/material";
import Card from "@mui/material/Card";


interface Props{
    imageSrc: string,
    name:string,
    more:string
}
export  default function CardNode({imageSrc, name, more}: Props){
    const noImg = imageSrc.indexOf("comundefined")
    console.log("image src= ", imageSrc, " & no image = ", noImg)
    return (
        <Card sx={{minWidth: 275}}>
            <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
                <img style={{width:"8em"}} src={noImg < 0? imageSrc : "https://murmuring-mountain-00929.herokuapp.com/uploads/small_question_be5a4e225e.png"} alt={"node-pic"}/>
                <Typography sx={{mb: 1.5}} color="text.primary">
                    {name}
                </Typography>
                <Typography variant="body2">
                    {more}</Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    )

}