import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function TodoDetails({ todoInfo, openDialog, setOpenDialog, setTodoInfo }) {
  
  return (
    <>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoInfo?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
                setTodoInfo(null);
              setOpenDialog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default TodoDetails;
