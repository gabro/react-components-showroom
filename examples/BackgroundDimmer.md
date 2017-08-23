### Examples

```js
const FlexView = require('react-flexview').default;

const Card = ({ image, title, author, children }) => (
  <FlexView column width={350} className='card'>
    <img src={`/${image}`} />
    <FlexView vAlignContent='center'>
      <FlexView grow className='card-title'>{title}</FlexView>
      <FlexView shrink={false} className='card-rating'><img src='/rating.png' heigth={12} /></FlexView>
    </FlexView>
    <FlexView className='card-author'>{author}</FlexView>
    {children}
  </FlexView>
);

initialState = { opened: false };

show = () => setState({ opened: true });

hide = () => setState({ opened: false });

state.opened ? (
  <BackgroundDimmer stopScrollPropagation onClickOutside={hide} color='black' alpha={0.85}>
    <Card image='cover.png' title='Utopia' author='Dennis Kelly'>
      After a group of people, who meet online, discover a bizarre graphic novel
      which seems to hold mysterious answers, they find themselves being tracked
      down by a merciless organization known merely as 'The Network'.
    </Card>
  </BackgroundDimmer>
) : <button onClick={show}>Show content</button>;
```
