import React from 'react';
import Head from 'next/head';
import styles from '../styles/QR.module.css';

function QR() {
    const websiteUrl = 'https://soton-dsoc.org/';
    
    // Generate QR code using a free API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(websiteUrl)}`;

    return (
        <>
            <Head>
                <title>dSoc QR Code</title>
                <meta name="description" content="QR Code for the Decentralised Society website" />
            </Head>
            <div className={styles.container}>
                <div className={styles.qrWrapper}>
                    <h1>dSoc QR Code</h1>
                    <p>Scan this QR code to visit our website</p>
                    <div className={styles.qrCode}>
                        <img 
                            src={qrCodeUrl} 
                            alt="QR Code for soton-dsoc.org" 
                            width={300} 
                            height={300}
                        />
                    </div>
                    <div className={styles.url}>
                        <p>{websiteUrl}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Share this QR code to help others discover the Decentralised Society!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QR; 