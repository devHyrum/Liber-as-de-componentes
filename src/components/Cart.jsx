import React from "react";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";
import { Box, Typography, Paper, Button, IconButton, Avatar, Divider } from '@mui/material';

export default function Cart() {
  const text = "Autumn Limited Edition Sneakers";

  return (
    <Paper elevation={24} sx={{ p: 3, position: 'absolute', right: 2, top: 16, left: 2, maxWidth: 400, zIndex: 1000 }}>
      <Typography variant="h6" sx={{ borderBottom: '1px solid slategray', pb: 1, mb: 2 }}>Cart</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Avatar src={thumbnail} variant="rounded" sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="body2" color="textSecondary">{`${text.substring(0, 23)}...`}</Typography>
          <Typography variant="body2" color="textSecondary">$125.00 x 3 <Typography component="span" fontWeight="bold" color="textPrimary">$375.00</Typography></Typography>
        </Box>
        <IconButton>
          <img src={iconDelete} alt="" />
        </IconButton>
      </Box>
      <Button variant="contained" color="primary" fullWidth>Checkout</Button>
    </Paper>
  );
}
