import { GroupForm } from "../components/GroupForm"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Exibir search Button', () => {
  it('No componente search', () => {
    render(<GroupForm />)
    expect(screen.queryByTestId("dropdown-button")).toBeInTheDocument()
  })
})