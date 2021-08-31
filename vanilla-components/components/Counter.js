class Counter {
  /**
   * @param {Object} props Contains all the possible properties (data) needed
   *    to construct this new Counter.
   * @property {string} props.headingText The title of the counter.
   * @property {string} [props.btnText] Optional button text.
   * @param {HTMLElement} parentNode The HTML element that this new Counter
   *    instance will be appended into as a child.
   * @returns {Counter} This new Counter instance is implicitly (automatically)
   *    returned.
   */
  constructor(props, parentNode) {
    this.count = 0;

    const container = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    container.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerText = `The count is: ${this.count}`;
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.btnText || "Click To Increment";
    btn.addEventListener("click", (event) => {
      console.log(this);
      this.count += 1;
      paragraph.innerText = `The count is: ${this.count}`;
    });
    container.appendChild(btn);

    const hr = document.createElement("hr");
    container.appendChild(hr);
    parentNode.appendChild(container);
  }
}

export default Counter;
