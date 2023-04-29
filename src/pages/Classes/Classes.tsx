import ContentBox from "../../components/ContentBox";
import { PageContent } from "../About/style";
import VLCPaper from '../../files/VLCPaper.pdf';
import DynamicColumns from "../../components/DynamicColumns";
const tiles = [<ContentBox>
    <h3>CS 421 - Programming Languages and Compilers</h3>
    <p>Learned how to use a function-based language (Haskell), and used that language to simulate how a programming language 
        works. Topics covered included semantics, grammars, monads, LL/LR parsing, and unification.
    </p>
</ContentBox>,
<ContentBox>
    <h3>CS 439 - Wireless Networking</h3>
    <p>Conducted semester-long project on visible light communication (VLC), and built a functioning VLC system using LEDs
        and Arduino. The finished project included a <a href={VLCPaper} target='_blank' rel='noopener noreferrer'>research paper</a>, a <a href="https://youtu.be/-9nVUHm7zHg">
            video demonstration</a>, and the <a href="https://github.com/andrewbenington/VLC">software</a> on my github.
    </p>
</ContentBox>,
<ContentBox >
    <h3><a href="https://cs.illinois.edu/courses/profile/CS233-120198">CS 233 - Computer Architecture</a></h3>
    <p>Gained an understanding of how programs are executed by an operating system, and how to write programs using
        assembly code. Also gained practice writing code that best takes advantage of caches, and how to optimize
        caching functionality depending on
        the code being executed. For the final project, I wrote a bot in MIPS that played a game similar to the game
        Overcooked, and worked with other bots created by my peers.</p>
</ContentBox>,
<ContentBox>
    <h3><a href="https://cs.illinois.edu/courses/profile/CS466">CS 466 - Bioinformatics</a></h3>
    <p>Applied dynamic programming methods to functions analyzing biological sequences, such as the nucleotides in a
        genome or the amino acid sequence of a protein. Completed a project implementing and comparing the Nussinov and
        Zuker algorithms for determining RNA structure from a sequence of amino acids. I was the one implementing Zuker,
        which I accomplished in Python with the help of published research on the algorithm and on nucleotide free
        energy data.</p>
</ContentBox>,
<ContentBox>
    <h3><a href="https://cs.illinois.edu/courses/profile/CS241">CS 241 - System Programming</a></h3>
    <p>Using C, mastered the use of common system functions and the risks that those functions can introduce.
        Recreated
        functions like malloc() and realloc(), and ranked 30th in the efficiency competition in my class of over 200
        where we were measured on our algorithm's speed and memory usage.
    </p>
</ContentBox>,
<ContentBox>
    <h3><a href="https://cs.illinois.edu/courses/profile/CS461">CS 461 - Computer Security</a></h3>
    <p>Developed the "attacker mindset" for finding potential vulnerabilities in software and systems.
        Gained experience taking advantage of some of these vulnerabilities to understand why they
        should be avoided, and a basic level of security that should be present in any software or system development.
    </p>
</ContentBox>,
<ContentBox>
    <h3><a href="https://cs.illinois.edu/courses/profile/CS438">CS 438 - Communication Networks</a></h3>
    <p>Gained hands-on knowledge with each of the layers of networking. Created a rudimentary version of TCP using UDP,
        and why throughput or reliability should be prioritized in different applications. Also gained an understanding of
        media access control, routing and switching, and encoding.
    </p>
</ContentBox>,
<ContentBox>
    <h3><a href="https://cs.illinois.edu/courses/profile/CS225">CS 225 - Discrete Structures</a></h3>
    <p>Built a solid foundation in C++, and learned the utility and drawbacks of various data structures.</p>
</ContentBox>]
function Classes() {
    return (
        <PageContent>
            <DynamicColumns elements={tiles} />
        </PageContent >
    );
}

export default Classes;