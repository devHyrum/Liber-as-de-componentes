import { useState } from "react";
import { data } from "./data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import { Container, Box, Grid, Typography, Button, IconButton, Paper, Divider, Avatar } from '@mui/material';

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  const { mainImage } = products[value];

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };

  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };

  return (
    <>
      <Header />
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" sx={{ py: 5 }}>
          <Grid item xs={12} lg={6}>
            <Box>
              <Box display={{ xs: 'block', lg: 'none' }}>
                {products.map((item, index) => (
                  <Box key={index} sx={{ position: slideIndex === index + 1 ? 'relative' : 'none', display: slideIndex === index + 1 ? 'block' : 'none' }}>
                    <img
                      src={item.mainImage}
                      alt=""
                      style={{ width: '100%', borderRadius: '16px', cursor: 'pointer' }}
                      onClick={() => setShowLightbox(true)}
                    />
                    <Box display="flex" justifyContent="space-between" mt={2}>
                      <IconButton onClick={previousSlide} sx={{ backgroundColor: 'white', p: 2, boxShadow: 1 }}>
                        <FaChevronLeft />
                      </IconButton>
                      <IconButton onClick={nextSlide} sx={{ backgroundColor: 'white', p: 2, boxShadow: 1 }}>
                        <FaChevronRight />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box display={{ xs: 'none', lg: 'block' }}>
                <img
                  src={mainImage}
                  alt=""
                  style={{ width: '100%', borderRadius: '16px', cursor: 'pointer' }}
                  onClick={() => setShowLightbox(true)}
                />
                <Box display="flex" justifyContent="start" gap={2} mt={2}>
                  {products.map((item, index) => (
                    <Paper
                      key={item.id}
                      onClick={() => setValue(index)}
                      sx={{
                        border: index === value ? '2px solid orange' : '2px solid transparent',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        opacity: index === value ? 0.8 : 1
                      }}
                    >
                      <img src={item.thumbnail} alt="" style={{ width: '80px' }} />
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} p={2}>
            <Typography variant="subtitle1" color="slategray" gutterBottom sx={{ display: 'inline-block', padding: 1, borderRadius: 1, fontWeight: 'bold', mb: 2 }}>
              Sneaker Company
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Fall Limited Edition Sneakers
            </Typography>
            <Typography variant="body1" color="slategray" gutterBottom sx={{ mb: 2 }}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="h5" fontWeight="bold">$125.00</Typography>
                <Typography variant="subtitle1" color="white" sx={{ backgroundColor: 'black', borderRadius: 1, padding: '2px 8px', fontWeight: 'bold' }}>50%</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary"><s>$250.00</s></Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={2} mt={2}>
              <Box display="flex" alignItems="center" bgcolor="#F7F8FD" borderRadius={1} p={1}>
                <IconButton onClick={handleMinus}>
                  <img src={minus} alt="" />
                </IconButton>
                <Typography variant="body1">{amount}</Typography>
                <IconButton onClick={() => setAmount(amount + 1)}>
                  <img src={plus} alt="" />
                </IconButton>
              </Box>
              <Button variant="contained" color="primary" bgcolor='#FF7D1B' startIcon={<AiOutlineShoppingCart />} sx={{ flexGrow: 1 }}>
                Add to cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
