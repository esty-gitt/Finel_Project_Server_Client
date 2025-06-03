import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../css/landingPageCss.css'; 

const LandingPage = () => {
    const [list, setList] = useState('');
    const [result, setResult] = useState(null);
  
    const handleSearch = () => {
      // הדמיה לתוצאה
      setResult({
        store: 'רמי לוי',
        total: 121.80,
      });
    };
    return (<>
    <div className="app-container">
      <section className="hero-section">
        <h1>מצא את הסופר הזול ביותר</h1>
        <p>הקלד את רשימת הקניות שלך ואנחנו נשווה בין מחירי הסופרים עבורך!</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="סל קניות"
          className="hero-image"
        />
      </section>

      <Divider />

      <section className="how-it-works">
        <h2>איך זה עובד?</h2>
        <p>
          השירות שלנו סורק את המחירים מכל הסופרים הגדולים בישראל – רמי לוי, שופרסל, ויקטורי ועוד –
          ומחשב עבורך את הסל הזול ביותר. חסוך זמן וכסף בלחיצת כפתור!
        </p>
      </section>

      <Card className="form-card">
        <h3>הזן את רשימת הקניות שלך:</h3>
        <InputTextarea
          rows={5}
          value={list}
          onChange={(e) => setList(e.target.value)}
          placeholder="לדוגמה: חלב, לחם, גבינה, עגבניות..."
          className="p-inputtext-lg"
        />
        <Button
          label="חשב את הסל הזול ביותר"
          icon="pi pi-calculator"
          onClick={handleSearch}
          className="p-button-success p-mt-3"
        />
      </Card>

      {result && (
        <Card className="result-card">
          <h4>💡 מצאנו עבורך את הסל המשתלם ביותר:</h4>
          <p>
            <strong>{result.store}</strong> - ₪{result.total.toFixed(2)}
          </p>
        </Card>
      )}
    </div>
    </>)
}
export default LandingPage;