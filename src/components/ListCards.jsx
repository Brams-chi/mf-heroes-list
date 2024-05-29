import { ContentCards, ButtonCustomize, ListItemCustom, CardMediaCustom } from './styles'
import { List, ListItemText, Typography } from '@mui/material'

const ListCards = (props) => {
  const { heroes } = props;

  const addFavoriteHero = (hero) => {
    const event = new CustomEvent('add-favorite-hero', {
      detail: hero
    });
    window.dispatchEvent(event);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <List>
      <ContentCards>
        {heroes.map((hero) => (
          <ListItemCustom key={hero.id} elevation={3}>
            <CardMediaCustom
              component="img"
              image={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
              alt={hero.title}
            />
            <ListItemText
              primary={
                <Typography
                    sx={{ alignSelf: 'center', margin: '10px auto' }}
                    variant="h4"
                    color="text.primary"
                  >
                  </Typography>
              }
              secondary={
                <Typography
                    sx={{ width: '85%', textAlign: 'justify', margin: '10px auto' }}
                    variant="subtitle2"
                    color="text.primary"
                  >
                    {hero.description}
                  </Typography>
              }
            />
            <ButtonCustomize variant={'outlined'} onClick={() => addFavoriteHero(hero)}>Agregar a favoritos</ButtonCustomize>
          </ListItemCustom>
        ))}
      </ContentCards>
    </List>
  )
}

export default ListCards
