import { useEffect, useState } from "react";

type TypeWriterProps = {
    phrases: string[];
}

export default function TypeWriter({ phrases }: TypeWriterProps) {

    const [phraseIndex, setPhraseIndex] = useState<number>(0);
    const [charIndex, setCharIndex] = useState<number>(0);
    const [deleting, setDeleting] = useState<boolean>(false);
    const [cursorVisible, setCursorVisible] = useState<boolean>(true);

    useEffect(() => {

        const blink = setInterval(() => {
            setCursorVisible((v) => !v);
        }, 500);

        return () => clearInterval(blink);

    }, []);


    useEffect(() => {
        const phrase = phrases[phraseIndex];

        if(!deleting && charIndex === phrase.length) {
            setTimeout(() => setDeleting(true), 1200);
            return;
        }

        if(deleting && charIndex === 0) {
            setDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCharIndex((i) => (deleting ? i-1 : i+1));
        }, deleting ? 50 : 80);

        return () => clearTimeout(timeout);

    }, [charIndex, deleting, phraseIndex, phrases]);

    return (
        <span>
            {phrases[phraseIndex].slice(0, charIndex)}
            <span>{cursorVisible ? "|": " "}</span>
        </span>
    );

}