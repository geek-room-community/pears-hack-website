import React from 'react';

const Prize = () => {
  const containerStyle = {
    width: '100%',
    maxWidth: '1000px',
    padding: '24px',
    margin: '0 auto',
    marginTop: '120px',
    position: 'relative',
    zIndex: 1,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    backgroundColor: '#1A1A1A',
    borderRadius: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '275px',
    height: '254px',
    boxSizing: 'border-box',
    // padding: '16px',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '35px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue, sans-serif',
    textAlign: 'center',
  };

  const cashPrizeStyle = {
    ...cardStyle,
    // border: '1px solid rgba(47, 128, 237, 0.5)',
  };

  const cashAmountStyle = {
    color: 'white',
    fontSize: '70px',
    fontWeight: '400',
    fontFamily: 'Bebas Neue, sans-serif',
    textAlign: 'center',
    marginBottom: '-10px',
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%', // Adjust for consistent image placement
    overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    marginTop: '30px',
  };

  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {/* AirPods Card */}
        <div style={cardStyle}>
          <div style={imageContainerStyle}>
            <img
              src="https://s3-alpha-sig.figma.com/img/1344/2923/d83e38304b902dd0efca3d687c8d80bc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o9n-gCduchqPJdcoQHgj5NoJZUxtGM7-GSjCV9X4BQ3vYZ8wqDu9NeFgRM~rM6I7SdrkeaBU1igaRBHnw78nypxg311alffOTlQI1H-IMrf0XE2P8655FQOzav~PqbhySxHg8SyrVCB6PqPpdN1ZAqoKjKq3JnXBSr489O5SjVc~LcIxM8OaSmyp~MeLIA78YlLQ-LXGLxtuxias565PNmO5jFIubGrGLvlFkVjaUqfJ2MXrp5y13Df5XzhzbHw17DcbjLPG2aetOtPz3AxU81ks7W-8ZeGkGo72dgBp8SVMv5h3f-Ma5rjeAHF5PdE2MEXLWaP2MKz76WQx18DHSA__"
              alt="AirPods"
              style={imageStyle}
            />
          </div>
          <h3 style={titleStyle}>AIRPODS</h3>
        </div>

        {/* Cash Prize Card */}
        <div style={cashPrizeStyle}>
          <h2 style={cashAmountStyle}>1,00,000</h2>
          <p style={titleStyle}>CASH PRIZE</p>
        </div>

        {/* Samsung Tab Card */}
        <div style={cardStyle}>
          <div style={imageContainerStyle}>
            <img
              src="https://s3-alpha-sig.figma.com/img/d0bb/a0d1/4915b5f239c0f1bc045916dd9423f811?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q38v3ILfTBbdJABFTJ2o9yhN5oSGC-dKJGrZquiHxdXD9dXyw89qo6Enw6VTdSGTj1vpaJ6QBuFxJCICOY~xOQclDP-EEdcKzL46TlPZx4MeFdduiKG8HT9g0buOxakvgn2am9yr-jHFix-Gtl0EPr8QN0UeDVHY7IA-OVll3VHCDt4PzIFyKPPpZzVNW11i00XxohVBuD7xHZvnIAnl666s7goV4xkItqxWPq5XOtEIYflaAv0zyoN~OyBtBl8MIYF1hPGkBvc9IPqEmrRKDDwQh97SJxpwFo8cDE6B-FnKNEbtWYhMXD9fpH6mjETqHp69sEV64wnczYSTbA~~6w__"
              alt="Samsung Tab"
              style={imageStyle}
            />
          </div>
          <h3 style={titleStyle}>SAMSUNG TAB</h3>
        </div>

        {/* JetBrains ID Card */}
        <div style={cardStyle}>
          <div style={imageContainerStyle}>
            <img
              src="https://s3-alpha-sig.figma.com/img/da4f/d3c1/809ca5dbda09b400cbaf223c93cb640d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXq1w7i3bP40tjVTjdrVRjeTbkLAsDqtyfU9AnSmOjzcFdolUmn0mC3LjHLdHW7KMdIrKeml6puONFBz-ue40t2AEc83lIDyji4plZInxA9Ss2ACTJgyzxtODTFihAkM71~bCmDsRCf4gS9-E2xAP7B8YviQ185AgNjuFfrDD-yOGrxndsdy-KICyJMu6iDlygSHeCucsA9bWPBzSTom7hs--fVrv6~to4xcblNNZegcnduMDzMbYOJRVz2nIn74KX71DTXwlXG2t6l4J3~fMlt8UT2O3brS-jpksAN0-A6LTdz5T1TOs7w2RmemtPjxt7YV3m2Y4duTyhxee53t7Q__"
              alt="JetBrains Logo"
              style={{ width: '100px', height: '100px', objectFit: 'contain', marginTop: '30px', }}
            />
          </div>
          <h3 style={titleStyle}>JETBRAINS ID</h3>
        </div>
      </div>
    </div>
  );
};

export default Prize;
