import React, {memo} from 'react';
import Helmet from 'react-helmet';
import contentWords from '~/utils/contentWords';
import styles from "~/styles/styles.pcss";
import ircLogo from '~/staticImages/iran-react-community.png';
import ircLogoPad from '~/staticImages/irc-logo-pad.png';

const {
    menu: {
        aboutUs,
    },
    page:{
        aboutUs: {
            sections: {
                contributing,
                ownerDocument,
                whatIsCommunity,
            },
        },
    },
} = contentWords;

const AboutUs = () => (
    <div className={styles['about-us']}>
        <Helmet title={aboutUs}/>
        <img src={ircLogo} className={styles['about-us__logo']} alt="iran react community logo" title="Iran React Community" />
        <div className={styles['about-us__section']}>
            <h2 className={styles['about-us__section--title']}>
                {whatIsCommunity.title}
            </h2>
            <p className={styles['about-us__section--paragraph']}>{whatIsCommunity.paragraph1}</p>
            <p className={styles['about-us__section--paragraph']}>{whatIsCommunity.paragraph2}</p>
            <p className={styles['about-us__section--paragraph']}>{whatIsCommunity.paragraph3}</p>
            <p className={styles['about-us__section--paragraph']}>{whatIsCommunity.paragraph4}</p>
            <p className={styles['about-us__section--paragraph']}>{whatIsCommunity.paragraph5}</p>
        </div>
        <div className={styles['about-us__section']}>
            <h2 className={styles['about-us__section--title']}>
                {ownerDocument.title}
            </h2>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph1}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph2}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph3}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph4}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph5}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph6}</p>
            <p className={styles['about-us__section--paragraph']}>{ownerDocument.paragraph7}</p>
        </div>
        <div className={styles['about-us__section']}>
            <h2 className={styles['about-us__section--title']}>
                {contributing.title}
            </h2>
            <p className={styles['about-us__section--paragraph']}>{contributing.paragraph1}</p>
        </div>
        <ul className={styles['about-us__socials-list']}>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.telegramGroup.link}>
                    <i className={styles['icon-telegram']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.telegramGroup.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.telegramGroup.hint}
                    </span>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.telegramChannel.link}>
                    <i className={styles['icon-telegram']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.telegramChannel.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.telegramChannel.hint}
                    </span>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.virgool.link}>
                    <i className={styles['icon-quotes-right']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.virgool.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.virgool.hint}
                    </span>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.github.link}>
                    <i className={styles['icon-github']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.github.title}
                    </h3>
                    <div className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.github.hint}
                        <ol className={styles['about-us__socials-list--content--hint--steps']}>
                            <li>{contributing.list.github.steps.one}</li>
                            <li>{contributing.list.github.steps.two}</li>
                            <li>{contributing.list.github.steps.three}</li>
                            <li>{contributing.list.github.steps.four}</li>
                        </ol>
                    </div>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.twitter.link}>
                    <i className={styles['icon-twitter']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.twitter.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.twitter.hint}
                    </span>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.instagram.link}>
                    <i className={styles['icon-instagram']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.instagram.title}
                    </h3>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.linkedInGroup.link}>
                    <i className={styles['icon-linkedin']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.linkedInGroup.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.linkedInGroup.hint}
                    </span>
                </div>
            </li>
            <li className={styles['about-us__socials-list--item']}>
                <a href={contributing.list.aparat.link}>
                    <i className={styles['icon-play']}/>
                </a>
                <div className={styles['about-us__socials-list--content']}>
                    <h3 className={styles['about-us__socials-list--content--title']}>
                        {contributing.list.aparat.title}
                    </h3>
                    <span className={styles['about-us__socials-list--content--hint']}>
                        {contributing.list.aparat.hint}
                    </span>
                </div>
            </li>
        </ul>
        <img src={ircLogoPad} className={styles['about-us__logo-pad']} alt="iran react community logo pad"/>
    </div>
);

export default memo(AboutUs);
