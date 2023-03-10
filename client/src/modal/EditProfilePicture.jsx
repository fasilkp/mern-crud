import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function EditProfileModal({open, setOpen}) {
  return (
    <div>
      {/* <Button variant="outlined" onClick={()=>setOpen(true)}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Edit Profile Picture</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select an Image to updtae Profile Picture
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            type="file"
            fullWidth
            accept="image/*"
            variant="standard"
          /> */}
          <input type="file" className='mt-4 mb-2' accept='image/*' />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={()=>setOpen(false)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EditProfileModal