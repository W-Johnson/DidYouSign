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
export default function AddBtn() {


    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [more, setMore] = useState("")
    const [pic, setPic] = useState<File>()

    const addSign = () => {
        const dataform = new FormData()
        const files = new FormData()

        dataform.append("username", name);
        dataform.append("more", more);
        if (pic) {
            files.append("files", pic, pic.name);
        }
        axios.post("http://52.47.202.39:1337/upload", files).then((response) => {
            dataform.append("picture", response.data.id)
          //  const id = {...response.data}
            axios.post("http://52.47.202.39:1337/signatures", {username: name, more: more, picture: response.data[0].id})
        })
    }
    return (
        <Box>
            <Button className={"add-btn"} variant={"contained"} startIcon={<AddIcon/>} onClick={() => setOpen(!open)}>
                Add you'r signature
            </Button>
            <Modal open={open} onClose={() => setOpen(!open)}>
                <Box className={"AddSignModal"} sx={{...style, flexDirection: 'column'}}>
                    <label htmlFor={"avatar"}>
                        <Avatar alt="avatar-user" sx={{width: 100, height: 100, cursor: "pointer"}} src={pic?.name}/>
                    </label>
                    <input id={"avatar"} accept="image/png, image/jpeg" type={"file"} style={{display: "none"}}
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
