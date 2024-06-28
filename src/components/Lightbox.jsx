import close from "../images/icon-close.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Dialog, IconButton, Box } from '@mui/material';

export default function Lightbox({ products, slideIndex, nextSlide, previousSlide, setShowLightbox }) {
  return (
    <Dialog fullScreen open={true} onClose={() => setShowLightbox(false)}>
      <Box sx={{ position: 'relative', bgcolor: 'rgba(0, 0, 0, 0.75)', height: '100vh' }}>
        <IconButton onClick={() => setShowLightbox(false)} sx={{ position: 'absolute', top: 16, right: 16 }}>
          <img src={close} alt="close" style={{ width: '40px' }} />
        </IconButton>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          {products.map((item, index) => (
            <Box key={index} sx={{ position: slideIndex === index + 1 ? 'relative' : 'none', display: slideIndex === index + 1 ? 'block' : 'none' }}>
              <img src={item.mainImage} alt="" style={{ maxHeight: '80vh', borderRadius: '16px' }} />
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
      </Box>
    </Dialog>
  );
}
