import React from "react";
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import '../styles/MenuComponent.css';

interface PdfComponentProps {
    src: string;
    pageCount: number;
}

interface PdfComponentState {
    pagesRendered: number
}
export class PdfComponent extends React.Component<PdfComponentProps, PdfComponentState> {

    constructor(props: PdfComponentProps) {
        super(props);
        this.state = {
            pagesRendered: 0
        }
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }
    getScale(): number {
        if (window.innerWidth > 960) {
            return 1.2
        } else if (window.innerWidth > 400) {
            return 0.9
        } else {
            return 0.7
        }
    }

    onDocumentLoadSuccess = () =>
        this.setState({
            pagesRendered: 0,
        });

    onRenderSuccess = () =>
        this.setState(prevState => ({
            pagesRendered: prevState.pagesRendered + 1,
        }));

    render() {
        const { pagesRendered } = this.state;
        const pagesRenderedPlusOne = Math.min(pagesRendered + 1, this.props.pageCount);
        return (
            <div className="documentContainer">
                <Document
                    renderMode="svg"
                    file={this.props.src}
                    onLoadSuccess={this.onDocumentLoadSuccess}

                >

                    {Array.from(
                        new Array(pagesRenderedPlusOne),
                        (el, index) => {
                            const isCurrentlyRendering = pagesRenderedPlusOne === index + 1;
                            const isLastPage = this.props.pageCount === index + 1;
                            const needsCallbackToRenderNextPage = isCurrentlyRendering && !isLastPage;

                            return (
                                <>
                                    <Page scale={this.getScale()}
                                        renderMode="svg"
                                        key={`page_${index + 1}`}
                                        onRenderSuccess={
                                            needsCallbackToRenderNextPage ? this.onRenderSuccess : undefined
                                        }
                                        pageNumber={index + 1} />
                                    <br />
                                </>)
                        })}
                </Document>
            </div>
        )
    }
}
