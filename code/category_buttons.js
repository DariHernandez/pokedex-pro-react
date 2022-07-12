export function CategoryButtons(props) {
  return React.createElement(
    "section",
    { className: "category-buttons" },
    React.createElement(
      "div",
      { className: "separator" },
      React.createElement(
        "svg",
        { "data-name": "Layer 1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1200 120", preserveAspectRatio: "none" },
        React.createElement("path", { d: "M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z", className: "shape-fill" })
      )
    ),
    React.createElement(
      "div",
      { className: "buttons regular-width" },
      React.createElement(FilterButton, { value: "types", pokecolor: "grass", onClick: function onClick(filter_name) {
          return props.handleFilter("types");
        } }),
      React.createElement(FilterButton, { value: "generations", pokecolor: "fire", onClick: function onClick(filter_name) {
          return props.handleFilter("generations");
        } }),
      React.createElement(FilterButton, { value: "moves and habilities", pokecolor: "water" })
    )
  );
}

function FilterButton(props) {
  return React.createElement(
    "button",
    {
      className: "btn round animate",
      pokecolor: props.pokecolor,
      onClick: props.onClick },
    props.value,
    React.createElement("img", {
      src: "./imgs/" + props.value.replaceAll(" ", "-") + "-btn.svg",
      className: "regular"
    })
  );
}