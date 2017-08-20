### Examples

```js
const labels = {
  success: 'Success',
  error: 'Error',
  ready: 'Ready',
  processing: 'Processing'
};

const icons = {
  success: <div />,
  error: <div />,
  processing: <div />
};

<AsyncStatusIndicator state='ready' labels={labels} icons={icons} />
```
