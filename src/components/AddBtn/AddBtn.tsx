import React, {useState} from "react";
import {Avatar, Box, Button, Modal, TextField,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from 'axios';
import './AddBtn.scss'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,

};

interface Props{
    contentList: any[],
    setContentList: any
}
export default function AddBtn({setContentList, contentList}: Props) {


    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [more, setMore] = useState("")
    const [pic, setPic] = useState<File>()

    const addSign = () => {
        const dataform = new FormData()
        const data = {username: name, more:more}
        dataform.append("data", JSON.stringify(data));
        if (pic) {
            dataform.append("files.picture", pic, pic.name);
        }
        axios.post("https://murmuring-mountain-00929.herokuapp.com/api/signatures?populate=%2A", dataform).then(response => {
            const obj = response.data.data.attributes;
            const newElement = {
                username: obj.username,
                more: obj.more,
                image: "https://murmuring-mountain-00929.herokuapp.com" + obj.picture.data.attributes.url
            }
            setContentList([...contentList, newElement])})
    }
    return (
        <Box>
            <Button className={"add-btn"} variant={"contained"} startIcon={<AddIcon/>} onClick={() => setOpen(!open)}>
                Add you'r signature
            </Button>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Box className={"AddSignModal"} sx={{...style, flexDirection: 'column'}}>

                    <input id={"avatar"} accept="image/png, image/jpeg" type={"file"}
                           onChange={(event) => {
                               if (event.currentTarget.files && event.currentTarget.files.length > 0)
                                   setPic(event.currentTarget.files[0])

                           }}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth={true}
                               onChange={(event) => {
                                   setName(event.currentTarget.value)
                               }}/>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="More"
                        multiline
                        variant="outlined"
                        maxRows={4}
                        fullWidth={true}
                        onChange={(event) => {
                            setMore(event.currentTarget.value)
                        }}/>
                    <Button className={"add-btn"} variant={"contained"} onClick={() => {
                        addSign()
                        setOpen(!open)
                    }}> Letsss goo</Button>
                </Box>
            </Modal>
        </Box>)
}
