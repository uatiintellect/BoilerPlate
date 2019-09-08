import * as React from 'react';
import{ScrollView,StyleSheet} from 'react-native';
import { Avatar, Button, Card, Paragraph} from 'react-native-paper';

const ProductCard = () => {
    return(     
<ScrollView
style = {{marginBottom: 215}}
>
  <Card>
    <Card.Title title="Product 1" subtitle="$13" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4b_7PFfVAQktXuniOJeLrBx5y2iA0z6rSrc_HB0FXnsbPeyo' }} />
    <Card.Actions>
        <Button>Buy</Button>
        <Button>Cancel</Button>
   </Card.Actions>
   <Card.Title title="Product 2" subtitle="$14" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
   <Card.Content>
   </Card.Content>
   <Card.Cover source={{ uri: 'https://theappcompany.com/wp-content/uploads/2015/12/secret-of-mobile-apps.jpg' }} />
   <Card.Actions>
        <Button>Buy</Button>
        <Button>Cancel</Button>
   </Card.Actions>
   <Card.Title title="Product 3" subtitle="$15" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
   <Card.Content>
   </Card.Content>
   <Card.Cover source={{ uri: 'http://www.velociters.com/wp-content/uploads/2016/03/mobile-app-development-company.jpg' }} />
   <Card.Actions>
        <Button>Buy</Button>
        <Button>Cancel</Button>
    </Card.Actions>
    <Card.Title title="Product 4" subtitle="$16" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
   <Card.Content>
   </Card.Content>
   <Card.Cover source={{ uri: 'https://www.catamerica.com/wp-content/uploads/2018/07/Delphi-Development-Service.jpg' }} />
   <Card.Actions>
        <Button>Buy</Button>
        <Button>Cancel</Button>
    </Card.Actions>
    <Card.Title title="Product 5" subtitle="$17" left={(props) => <Avatar.Icon {...props} icon="folder" />} />
   <Card.Content>
   </Card.Content>
   <Card.Cover source={{ uri: 'http://www.yesmobilephone.co.uk/wp-content/uploads/2017/03/carrier-management.jpg' }} />
   <Card.Actions>
        <Button>Buy</Button>
        <Button>Cancel</Button>
    </Card.Actions>
   </Card>
 </ScrollView>
);
    }

    
export default ProductCard;