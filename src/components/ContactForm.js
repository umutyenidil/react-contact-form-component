import React from 'react';

import styles from './ContactForm.module.css';

const ContactForm = (props) => {
    return <div className={`${styles['container']}`}>
        <div className={`${styles['content']}`}>
            <div className={`${styles['left-side']}`}>
                <Detail boxIcon='bxs-map-pin'
                        topic='Address'
                        textOne='Surkhet, NP12'
                        textTwo='Aydin Kosk 09'/>
                <Detail boxIcon='bxs-phone'
                        topic='Phone'
                        textOne='+90543 222 11 00'
                        textTwo='+0256 777 88 99'/>
                <Detail boxIcon='bxs-envelope'
                        topic='Email'
                        textOne='yenidil@umut.com'
                        textTwo='test@test.com'/>
            </div>

            <div className={`${styles['right-side']}`}>
                <div className={`${styles['topic-text']}`}>
                    Send us a message
                </div>
                <p>
                    If you want to join us, just text me
                </p>
                <form action='#'>
                    <div className={`${styles['input-box']}`}>
                        <input type='text' placeholder='Enter your name'/>
                    </div>
                    <div className={`${styles['input-box']}`}>
                        <input type='text' placeholder='Enter your name'/>
                    </div>
                    <div className={`${styles['input-box']} ${styles['message-box']}`}>
                        <textarea></textarea>
                    </div>
                    <div className={`${styles['button']}`}>
                        <input type='button' value='Send Now'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

const Detail = (props) => {
    let boxIcon = props.boxIcon;
    let topic = props.topic;
    let textOne = props.textOne;
    let textTwo = props.textTwo;

    return <div className={`${styles['details']} ${styles['address']}`}>
        <i className={`bx ${boxIcon}`}></i>
        <div className={`${styles['topic']}`}>
            {topic}
        </div>
        <div className={`${styles['text-one']}`}>
            {textOne}
        </div>
        <div className={`${styles['text-two']}`}>
            {textTwo}
        </div>
    </div>;
}

export default ContactForm;