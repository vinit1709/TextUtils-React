import React from 'react'

export default function About(props) {
    // document.title = props.title;

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }}>
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }}>
                            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }}>
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }}>
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }}>
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{ border: props.mode === 'dark' ? '1px solid white' : '' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? '#0a3c63' : '', color: props.mode === 'dark' ? '#fff' : '#000' }}>
                            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
