import React from 'react';

const Prize = () => {
  const styles = `
    @keyframes marquee {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-50%);
      }
    }

    .prize-container {
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
      margin-top: 180px;
      position: relative;
      z-index: 1;
      height: 600px;
      overflow: hidden;
    }

    .marquee {
      display: flex;
      flex-direction: column;
      animation: marquee 20s linear infinite;
      padding-top: 24px;
    }

    .prize-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      justify-content: center;
      align-items: center;
    }

    .prize-card {
      background-color: #1A1A1A;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 275px;
      height: 254px;
      box-sizing: border-box;
    }

    .prize-title {
      color: white;
      font-size: 35px;
      font-weight: 400;
      font-family: 'Bebas Neue', sans-serif;
      text-align: center;
    }

    .cash-amount {
      color: white;
      font-size: 70px;
      font-weight: 400;
      font-family: 'Bebas Neue', sans-serif;
      text-align: center;
      margin-bottom: -10px;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      overflow: hidden;
    }

    .prize-image {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      margin-top: 30px;
    }

    .jetbrains-image {
      width: 100px;
      height: 100px;
    }

    @media screen and (max-width: 768px) {
      .prize-container {
        height: 50vh;
        margin-top: -15px;
      }

      .prize-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }

      .prize-card {
        width: 160px;
        height: 148px;
      }

      .prize-title {
        font-size: 20px;
      }

      .cash-amount {
        font-size: 40px;
      }

      .jetbrains-image {
        width: 60px;
        height: 60px;
      }
    }
  `;

  // Create the content grid
  const content = (
    <div className="prize-grid">
      <div className="prize-card">
        <div className="image-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/1344/2923/d83e38304b902dd0efca3d687c8d80bc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9n-gCduchqPJdcoQHgj5NoJZUxtGM7-GSjCV9X4BQ3vYZ8wqDu9NeFgRM~rM6I7SdrkeaBU1igaRBHnw78nypxg311alffOTlQI1H-IMrf0XE2P8655FQOzav~PqbhySxHg8SyrVCB6PqPpdN1ZAqoKjKq3JnXBSr489O5SjVc~LcIxM8OaSmyp~MeLIA78YlLQ-LXGLxtuxias565PNmO5jFIubGrGLvlFkVjaUqfJ2MXrp5y13Df5XzhzbHw17DcbjLPG2aetOtPz3AxU81ks7W-8ZeGkGo72dgBp8SVMv5h3f-Ma5rjeAHF5PdE2MEXLWaP2MKz76WQx18DHSA__"
            alt="AirPods"
            className="prize-image"
          />
        </div>
        <h3 className="prize-title">AIRPODS</h3>
      </div>

      <div className="prize-card">
        <h2 className="cash-amount">1,00,000</h2>
        <p className="prize-title">CASH PRIZE</p>
      </div>

      <div className="prize-card">
        <div className="image-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/d0bb/a0d1/4915b5f239c0f1bc045916dd9423f811?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q38v3ILfTBbdJABFTJ2o9yhN5oSGC-dKJGrZquiHxdXD9dXyw89qo6Enw6VTdSGTj1vpaJ6QBuFxJCICOY~xOQclDP-EEdcKzL46TlPZx4MeFdduiKG8HT9g0buOxakvgn2am9yr-jHFix-Gtl0EPr8QN0UeDVHY7IA-OVll3VHCDt4PzIFyKPPpZzVNW11i00XxohVBuD7xHZvnIAnl666s7goV4xkItqxWPq5XOtEIYflaAv0zyoN~OyBtBl8MIYF1hPGkBvc9IPqEmrRKDDwQh97SJxpwFo8cDE6B-FnKNEbtWYhMXD9fpH6mjETqHp69sEV64wnczYSTbA~~6w__"
            alt="Samsung Tab"
            className="prize-image"
          />
        </div>
        <h3 className="prize-title">SAMSUNG TAB</h3>
      </div>

      <div className="prize-card">
        <div className="image-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/da4f/d3c1/809ca5dbda09b400cbaf223c93cb640d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXq1w7i3bP40tjVTjdrVRjeTbkLAsDqtyfU9AnSmOjzcFdolUmn0mC3LjHLdHW7KMdIrKeml6puONFBz-ue40t2AEc83lIDyji4plZInxA9Ss2ACTJgyzxtODTFihAkM71~bCmDsRCf4gS9-E2xAP7B8YviQ185AgNjuFfrDD-yOGrxndsdy-KICyJMu6iDlygSHeCucsA9bWPBzSTom7hs--fVrv6~to4xcblNNZegcnduMDzMbYOJRVz2nIn74KX71DTXwlXG2t6l4J3~fMlt8UT2O3brS-jpksAN0-A6LTdz5T1TOs7w2RmemtPjxt7YV3m2Y4duTyhxee53t7Q__"
            alt="JetBrains Logo"
            className="jetbrains-image"
          />
        </div>
        <h3 className="prize-title">JETBRAINS ID</h3>
      </div>

      <div className="prize-card">
        <div className="image-container">
          <img
            src="https://s3-alpha-sig.figma.com/img/3701/c7c8/f85dc498d6c9cdc3586f95025332433a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HYPh0mTcq6LgaxuH2ehINTWkoedr9~59H0sHx7wAZibtGqpEEbyvLW~eTMk4mF8NQ82bcGdBuH2JtZdH7Vflnpwh1chG5LOOFpdCRy85E0hkqy1mJhdoVdYu0~fRH-KKcDZ95USfM35Mfnou-Sxs23x6KMK6CxxhsET-Cy~h~EXAl7G4udofo-yJoZjAweggqx61MMmvxNKouqLfaM4qisviG5Y5ia-DuWaTWSN55257w-mBIArz7NtiBkX-2bRergY4Qbp4u5A4xq4D7aG-cCf1J6By4DcACFtovEO9716-kY1Avczx89gS2-06zOPc4c5nSCenaEe91hf2ivwNJQ__"
            alt="Goodies"
            className="prize-image"
          />
        </div>
        <h3 className="prize-title">GOODIES AT YOUR DOOR STEP</h3>
      </div>

      <div className="prize-card">
        <h2 className="prize-title">FREE AMAZON VOUCHERS</h2>
      </div>
    </div>
  );

  return (
    <>
      <style>{styles}</style>
      <div className="prize-container">
        <div className="marquee">
          {content}
          <div style={{ marginTop: '24px' }}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prize;