package com.example.demo.util;

import com.example.demo.model.UserProject;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.draw.LineSeparator;

import java.io.ByteArrayOutputStream;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

public class PdfGenerator {

    public static byte[] generateInvoice(UserProject userProject, String projectName) {
        try (ByteArrayOutputStream out = new ByteArrayOutputStream()) {
            Document document = new Document();
            PdfWriter.getInstance(document, out);
            document.open();

            // Invoice Header
            Font titleFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, BaseColor.BLACK);
            Paragraph title = new Paragraph("INVOICE", titleFont);
            title.setAlignment(Element.ALIGN_RIGHT);
            document.add(title);
            document.add(new Paragraph("\n"));
            document.add(new LineSeparator());
            document.add(new Paragraph("\n"));

            // Client and Payment Details
            PdfPTable infoTable = new PdfPTable(2);
            infoTable.setWidthPercentage(100);
            infoTable.setSpacingBefore(10f);
            infoTable.setSpacingAfter(10f);

            // Left Column: Issued To & Pay To
            PdfPCell leftCell = new PdfPCell();
            leftCell.setBorder(Rectangle.NO_BORDER);
            leftCell.addElement(new Paragraph("ISSUED TO:"));
            leftCell.addElement(new Paragraph("Richard Sanchez"));
            leftCell.addElement(new Paragraph("Thyme Unlimited"));
            leftCell.addElement(new Paragraph("123 Anywhere St., Any City"));
            leftCell.addElement(new Paragraph("\n"));
            leftCell.addElement(new Paragraph("PAY TO:"));
            leftCell.addElement(new Paragraph("Borcele Bank"));
            leftCell.addElement(new Paragraph("Account Name: Adeline Palmerston"));
            leftCell.addElement(new Paragraph("Account No.: 0123 4567 8901"));
            infoTable.addCell(leftCell);

            // Right Column: Invoice Details
            PdfPCell rightCell = new PdfPCell();
            rightCell.setBorder(Rectangle.NO_BORDER);
            rightCell.addElement(new Paragraph("INVOICE NO:    " + userProject.getId().substring(0, 8)));

            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
            rightCell.addElement(new Paragraph("DATE:          " + userProject.getEndTime().format(formatter)));
            rightCell.addElement(new Paragraph("DUE DATE:      " + userProject.getEndTime().plusDays(30).format(formatter)));
            infoTable.addCell(rightCell);

            document.add(infoTable);
            document.add(new LineSeparator());
            document.add(new Paragraph("\n"));

            // Items Table
            PdfPTable itemsTable = new PdfPTable(3);
            itemsTable.setWidthPercentage(100);
            itemsTable.setSpacingBefore(10f);
            itemsTable.setSpacingAfter(10f);
            float[] columnWidths = {4f, 1f, 1f};
            itemsTable.setWidths(columnWidths);

            addTableHeader(itemsTable, "DESCRIPTION", "UNIT PRICE", "TOTAL");

            // Add project row
            itemsTable.addCell(createCell(projectName, false));
            itemsTable.addCell(createCell(String.valueOf(userProject.getTotalAmount()), true));
            itemsTable.addCell(createCell(String.valueOf(userProject.getTotalAmount()), true));

            document.add(itemsTable);
            document.add(new Paragraph("\n"));

            // Totals
            Paragraph subtotal = new Paragraph("SUBTOTAL: $" + String.format("%.2f", userProject.getTotalAmount()));
            subtotal.setAlignment(Element.ALIGN_RIGHT);
            document.add(subtotal);

            document.close();
            return out.toByteArray();

        } catch (DocumentException | java.io.IOException e) {
            e.printStackTrace();
            return new byte[0];
        }
    }

    private static void addTableHeader(PdfPTable table, String... headers) {
        Stream.of(headers)
              .forEach(headerTitle -> {
                  PdfPCell header = new PdfPCell();
                  header.setBackgroundColor(BaseColor.LIGHT_GRAY);
                  header.setBorderWidth(2);
                  header.setPhrase(new Phrase(headerTitle));
                  header.setHorizontalAlignment(Element.ALIGN_CENTER);
                  header.setPadding(5);
                  table.addCell(header);
              });
    }

    private static PdfPCell createCell(String content, boolean alignRight) {
        PdfPCell cell = new PdfPCell(new Phrase(content));
        cell.setHorizontalAlignment(alignRight ? Element.ALIGN_RIGHT : Element.ALIGN_LEFT);
        cell.setPadding(5);
        return cell;
    }
}