export function withLayout(layout) {
  return function (Page) {
    Page.Layout = layout
    return Page
  }
}
