import { expect, jest, test } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react'
import Header from '@components/Header'

test('Header component renders correctly', () => {
  const mockProps = {
    isAvailableToAddRows: true,
    isAvailableToSave: false,
    setZoom: jest.fn(),
    zoom: 1.0,
    addProductsRow: jest.fn(),
    saveChanges: jest.fn(),
  }

  const { getByAltText, getByText } = render(<Header {...mockProps} />)

  // Check if the Zara logo is rendered
  const zaraLogo = getByAltText('Zara logo')
  expect(zaraLogo).toBeTruthy()

  // Check if zoom in and zoom out logos are rendered
  const zoomInLogo = getByAltText('Zoom in logo')
  const zoomOutLogo = getByAltText('Zoom out logo')
  expect(zoomInLogo).toBeTruthy()
  expect(zoomOutLogo).toBeTruthy()

  // Perform click on zoom in and zoom out buttons and check if functions are called or not
  fireEvent.click(zoomInLogo)
  expect(mockProps.setZoom).toHaveBeenCalledTimes(0)

  fireEvent.click(zoomOutLogo)
  expect(mockProps.setZoom).toHaveBeenCalledWith(0.9)

  // Check if Add and Save buttons are rendered
  const addButton = getByText('Add')
  const saveButton = getByText('Save')
  expect(addButton).toBeTruthy()
  expect(saveButton).toBeTruthy()

  // Perform click on Add and Save buttons and check if functions are called
  fireEvent.click(addButton)
  fireEvent.click(saveButton)
  expect(mockProps.addProductsRow).toHaveBeenCalledTimes(1)
  expect(mockProps.saveChanges).toHaveBeenCalledTimes(0)
})
