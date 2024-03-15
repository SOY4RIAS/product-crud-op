import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

import { ProductForm } from '@/app/products/components';

describe('ProductForm', () => {
  it('should be defined', () => {
    render(
      <ProductForm
        onSubmit={() => {}}
        title="Test Title"
        description="Test Description"
      />
    );
    expect(ProductForm).toBeDefined();
  });

  it('should render a form with input fields for image, title, description, brand, price, and stock', () => {
    // Arrange
    const initialValues = {
      image: 'https://example.com/image.jpg',
      title: 'Example Product',
      description: 'This is an example product',
      brand: 'Example Brand',
      price: 10,
      stock: 100,
    };

    render(
      <ProductForm
        onSubmit={vitest.fn()}
        initialValues={initialValues}
        title="Product Form"
        description="Please fill out the product details"
      />
    );

    expect(screen.getAllByLabelText('Image')[0]).toBeDefined();
    expect(screen.getAllByLabelText('Title')[0]).toBeDefined();
    expect(screen.getAllByLabelText('Description')[0]).toBeDefined();
    expect(screen.getAllByLabelText('Brand')[0]).toBeDefined();
    expect(screen.getAllByLabelText('Price')[0]).toBeDefined();
    expect(screen.getAllByLabelText('Stock')[0]).toBeDefined();
  });

  // Displays error message when form input is invalid.
  it('should display error message when form input is invalid', async () => {
    // Arrange
    const onSubmit = vitest.fn();
    const initialValues = {
      image: 'https://example.com/image.jpg',
      title: 'Example Product',
      description: 'This is an example product',
      brand: 'Example Brand',
      price: 10,
      stock: 100,
    };

    render(
      <ProductForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        title="Product Form"
        description="Please fill out the product details"
      />
    );

    // Act
    userEvent.clear(screen.getAllByLabelText('Image')[0]);
    userEvent.clear(screen.getAllByLabelText('Title')[0]);
    userEvent.clear(screen.getAllByLabelText('Description')[0]);
    userEvent.clear(screen.getAllByLabelText('Brand')[0]);
    userEvent.clear(screen.getAllByLabelText('Price')[0]);
    userEvent.clear(screen.getAllByLabelText('Stock')[0]);
    userEvent.click(screen.getAllByRole('button', { name: 'Submit' })[0]);

    // Assert
    await waitFor(async () => {
      expect(
        screen.getAllByText('Please provide a product image.')[0]
      ).toBeDefined();
      expect(
        screen.getAllByText('Title must be at least 3 characters long.')[0]
      ).toBeDefined();
      expect(
        screen.getAllByText(
          'Description must be at least 10 characters long.'
        )[0]
      ).toBeDefined();
      expect(
        screen.getAllByText('Please provide a product brand.')[0]
      ).toBeDefined();
    });
  });
});
