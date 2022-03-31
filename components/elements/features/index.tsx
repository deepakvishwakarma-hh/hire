
import style from "./style.module.scss";
import Block from "./Block";

const Features = () => {
    return (
        <div className={style.wrapper}>

            <Block topic="Fast hiring" paragraph="You’ll be ready to start working with your matched developer in 24 hours via your dedicated Slack workspace!" url="/fast-hiring.svg" />
            <Block topic="Perfact match" paragraph="With 10000+ developers in our pre-vetted pool, it's easy to find the right developer." url="/perfact-match.svg" />
            <Block topic="Remote ready " paragraph="We match the timezone so there is enough time overlap for easy communication." url="/remote-ready.svg" />

        </div>
    )
}

export default Features;