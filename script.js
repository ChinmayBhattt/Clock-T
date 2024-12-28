      let date;
      let time;
      let a;
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      // Function to update current time and date
      function updateTime() {
        a = new Date();
        date = a.toLocaleDateString('en-US', options);
        
        let hours = a.getHours();
        let minutes = a.getMinutes();
        let seconds = a.getSeconds();
        
        time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        document.getElementById('time').innerHTML = time + '<br> On ' + date;
      }
      
      setInterval(updateTime, 1000);

      // Function to display time for selected country
      function showTimeForCountry() {
        const country = document.getElementById('countrySelect').value;
        const countryNames = {
          'US': 'en-US',
          'UK': 'en-GB',
          'India': 'en-IN',
          'Japan': 'ja-JP',
          'Germany': 'de-DE',
          'France': 'fr-FR',
          'Australia': 'en-AU',
          'Canada': 'en-CA',
          'Mexico': 'es-MX',
          'Brazil': 'pt-BR',
          'China': 'zh-CN',
          'Russia': 'ru-RU',
          'South Korea': 'ko-KR',
          'Italy': 'it-IT',
          'Spain': 'es-ES'
        };

        if (country) {
          const locale = countryNames[country];
          const a = new Date();
          const countryDate = a.toLocaleString(locale, options);
          const countryTime = a.toLocaleTimeString(locale);
          
          document.getElementById('countryTime').innerHTML = `<p><strong>${country}</strong>: ${countryTime} on ${countryDate}</p>`;
        }
      }
