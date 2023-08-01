const ghPages = require('gh-pages');

ghPages.publish(
  'public',
  {
    user: {
      name: 'Khalid Shaikh',
      email: 'shaikhalidwork@gmail.com'
    },
    branch: 'master',
    message: 'Deploy commit from gh-pages'
  },
  (success, error) => console.log(success, error)
);
