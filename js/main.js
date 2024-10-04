// Create a horoscope app where the user can enter their birthday and
// get their horoscope. There should be minimum 12 unique
// horoscopes.


//allow user to input their birthday
//allow the user to click a button to get their horoscope
//after the user inputs their birthday and clicks a button, store their birthday to use later
//compare user's birthday to horoscope date ranges
//if birthday falls into specific horoscope date range, display corresponding horoscope for that date range

// Aquarius: January 21 – February 19
// Pisces: February 20 – March 20
// Aries: March 21- April 20
// Taurus: April 21 – May 21
// Gemini: May 22 – June 21
// Cancer: June 22 – July 23
// Leo: July 24 – August 23
// Virgo: August 24 – September 23
// Libra: September 24 – October 23
// Scorpio: October 24 – November 22
// Sagittarius: November 23 – December 21
// Capricorn: December 22- January 20

//months are zero indexed, dates range from 1 - 31

document.querySelector('button').addEventListener('click', horoscope)

function horoscope() {
    //get birthday from user input
    const birthday = new Date(document.querySelector('input').value)
    //store month and date in variables
    const birthdayMonth = birthday.getUTCMonth()
    const birthdayDate = birthday.getUTCDate()
    console.log(typeof birthdayDate)
    //check to make sure month and date are being pulled correctly
    console.log(birthday)
    console.log(birthdayMonth, birthdayDate)
    //create a variable to reuse, to put horoscope in the DOM
    const sign = document.querySelector('span')
    const horoscope = document.querySelector('p')

    //check date ranges
    //handle edge case if user does not enter a date before clicking

    if(birthdayMonth === 0 && birthdayDate >= 21 || birthdayMonth === 1 && birthdayDate <= 19){
        //AQUARIUS
        console.log('Aquarius')
        sign.innerText = 'Aquarius'
        horoscope.innerText = 'You\'re feeling innovative today. It\'s a great day to brainstorm or tackle a project that requires outside-the-box thinking. Don\'t be afraid to challenge the status quo, as your unique vision could inspire others around you.'
    }else if(birthdayMonth === 1 && birthdayDate >= 20 || birthdayMonth === 2 && birthdayDate <= 20){
        //PISCES
        console.log('Pisces')
        sign.innerText = 'Pisces'
        horoscope.innerText = 'Your empathetic side is in full force. You may find yourself drawn to helping others or offering emotional support. However, remember to protect your own energy—balance your giving nature with some quiet time for reflection and recharging.'
    }else if(birthdayMonth === 2 && birthdayDate >= 21 || birthdayMonth === 3 && birthdayDate <= 20){
        //ARIES
        console.log('Aries')
        sign.innerText = 'Aries'
        horoscope.innerText = 'Today\'s energy pushes you to take bold actions. Whether it\'s starting a new project or voicing your opinion, trust your instincts. Just remember to balance your assertiveness with patience. Collaboration will bring greater rewards than working solo.'
    }else if(birthdayMonth === 3 && birthdayDate >= 21 || birthdayMonth === 4 && birthdayDate <= 21){
        //TAURUS
        console.log('Taurus')
        sign.innerText = 'Taurus'
        horoscope.innerText = 'This is a day to focus on self-care and comfort. You may feel drawn to indulge in your favorite foods or activities. While it\'s important to treat yourself, keep an eye on balance. A financial decision may come into play soon—stay grounded and practical.'
    }else if(birthdayMonth === 4 && birthdayDate >= 22 || birthdayMonth === 5 && birthdayDate <= 21){
        //GEMINI
        console.log('Gemini')
        sign.innerText = 'Gemini'
        horoscope.innerText = 'You\'re in the spotlight today. Conversations and social interactions flow smoothly, making it a great time to share ideas or network. Your natural charm will attract new connections, so be ready to seize opportunities when they arise.'
    }else if(birthdayMonth === 5 && birthdayDate >= 22 || birthdayMonth === 6 && birthdayDate <= 23){
        //CANCER
        console.log('Cancer')
        sign.innerText = 'Cancer'
        horoscope.innerText = 'Your emotional intuition is heightened, Cancer. This makes it a perfect day to nurture your relationships. Spend time with loved ones or check in with a friend you\'ve been thinking about. Trust your gut if a difficult decision is looming—it won\'t steer you wrong.'
    }else if(birthdayMonth === 6 && birthdayDate >= 24 || birthdayMonth === 7 && birthdayDate <= 23){
        //LEO
        console.log('Leo')
        sign.innerText = 'Leo'
        horoscope.innerText = 'Adventure is calling, and today you\'re feeling ready to answer. Whether it\'s a physical journey or mental exploration, embrace the opportunity for growth. Your creativity is running high, so put that flair into action in whatever you pursue.'
    }else if(birthdayMonth === 7 && birthdayDate >= 24 || birthdayMonth === 8 && birthdayDate <= 23){
        //VIRGO
        console.log('Virgo')
        sign.innerText = 'Virgo'
        horoscope.innerText = 'Details matter today, and your analytical mind is in full gear. Tackle any tasks that require precision and focus, but don\'t get bogged down in perfectionism. Balance productivity with self-compassion to keep your energy flowing.'
    }else if(birthdayMonth === 8 && birthdayDate >= 24 || birthdayMonth === 9 && birthdayDate <= 23){
        //LIBRA
        console.log('Libra')
        sign.innerText = 'Libra'
        horoscope.innerText = 'Harmony is key today, both in your environment and relationships. Take time to mediate any conflicts or restore balance where it\'s needed. You\'ll find that peace of mind comes more easily when you actively create it around you.'
    }else if(birthdayMonth === 9 && birthdayDate >= 24 || birthdayMonth === 10 && birthdayDate <= 22){
        //SCORPIO
        console.log('Scorpio')
        sign.innerText = 'Scorpio'
        horoscope.innerText = 'Transformation is in the air for you. If you\'ve been feeling stuck or ready for a change, today is the day to start making moves. Whether it\'s an internal shift or an external goal, let your determination guide you to where you need to be.'
    }else if(birthdayMonth === 10 && birthdayDate >= 23 || birthdayMonth === 11 && birthdayDate <= 21){
        //SAGITTARIUS
        console.log('Sagittarius')
        sign.innerText = 'Sagittarius'
        horoscope.innerText = 'Your adventurous spirit is lit up today. Opportunities for learning, travel, or philosophical exploration will appeal to you. It\'s a great time to step outside your comfort zone and embrace the unknown with enthusiasm.'
    }else if(birthdayMonth === 11 && birthdayDate >= 22 || birthdayMonth === 0 && birthdayDate <= 20){
        //CAPRICORN
        console.log('Capricorn')
        sign.innerText = 'Capricorn'
        horoscope.innerText = 'Today is all about stability and discipline. Focus on your long-term goals and take practical steps toward achieving them. Hard work is rewarded now, and your perseverance will set you up for future success. Be patient, the results will come.'
    }else {
        console.log('Please Enter a Date.')
        sign.innerText = 'Please Enter a Date.'
        horoscope.innerText = ''
    }

}














