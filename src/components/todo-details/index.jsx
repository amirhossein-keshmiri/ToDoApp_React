import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";


export default function ToDoDetails({ todoDetails, openDialog, setOpenDialog, setTodoDetails }) {
    return <Fragment>
        <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
            <DialogTitle>
                {todoDetails?.todo}
            </DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                    setTodoDetails(null);
                    setOpenDialog(false);
                }}>
                    close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}