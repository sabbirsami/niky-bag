import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Question = () => {
    return (
        <div>
            <Container className="py-5">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How react work?</Accordion.Header>
                        <Accordion.Body className="text-start">
                            React is a JavaScript library. It's ensures one-way
                            data flow. It's create virtual dom and when
                            something new added or something changed it's
                            compare with real dom and after find what change it
                            change only this component and for this reasons
                            react work very first compare to other JavaScript
                            library.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Props VS State</Accordion.Header>
                        <Accordion.Body className="text-start">
                            Props and State both are JavaScript object. You
                            cannot accesses and modify state outside of the
                            component you can only use it inside the component.
                            On the other hand you use props so many time or when
                            ever you want to use in ui.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Question;
