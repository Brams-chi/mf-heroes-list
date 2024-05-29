import { Grid, Card, styled, CardMedia, Button } from "@mui/material"

export const ContentCards = styled(Grid)(() => ({
  width: '98%',
  display: "grid",
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
  margin: '20px'
}))

export const ListItemCustom = styled(Card)(() => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems:'center',
  textAlign: 'center',
  width: '98%',
  margin: '10px auto',
  padding: '14px 0px',
  transition: 'all 0.5s ease',
  "&:hover": {
    maskImage: 'linear-gradient(to top, white 92%, transparent)'
  },
}))

export const CardMediaCustom =styled(CardMedia)(() => ({
  height: '350px',
  width: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  maskImage: 'linear-gradient(to bottom, white 62%, transparent)'
}))

export const ButtonCustomize = styled(Button)(() => ({
  borderRadius: '28px',
  border: 'none',
  "&:hover": {
    color: "#e6b651",
    cursor: 'pointer',
    border: '2px solid #e6b651',
  },
}))
