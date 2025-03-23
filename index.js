const fetchWeather = city => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const weatherData = {
          temperature: 26,
          humidity: 0.8
        };
        resolve(weatherData);
      }, 1000);
    });
  };
  const fetchNews = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newsData = [
          { title: 'Політика' },
          { title: 'Економіка' }
        ];
        resolve(newsData);
      }, 2000);
    });
  };
  const fetchWeatherAndNews = city => {
    return Promise.all([fetchWeather(city), fetchNews()])
      .then(([weather, news]) => {
        return { weather, news };
      })
      .catch(error => {
        return error;
      });
  };
  const city = 'Kyiv'; 
  fetchWeatherAndNews(city)
    .then(data => {
      console.log('Weather and News Data:', data);
    })
    .catch(error => {
      console.error('Error fetching weather and news:', error);
    });
//Написати функцію, яка завантажує список користувачів з API https://jsonplaceholder.typicode.com/users.
//Зберігати отримані дані в localStorage, щоб при повторному завантаженні сторінки дані бралися звідти.
//Якщо в localStorage вже є дані, брати їх звідти замість повторного запиту.
//Вивести список користувачів на сторінку.
function fetchUsers() {
    const users = localStorage.getItem('users');
    if (users) {
      return Promise.resolve(JSON.parse(users));
    }
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        localStorage.setItem('users', JSON.stringify(users));
        return users;
      });
  } 
  fetchUsers()
    .then(users => {
      const ul = document.createElement('ul');
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
