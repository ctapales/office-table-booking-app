package com.booking.restservice.dto;

public class OfficeDTO {
    private Integer id;
    private Integer number;
    private byte[] layout;

    public OfficeDTO() {
    }

    public OfficeDTO(Integer id, Integer number, byte[] layout) {
        this.id = id;
        this.number = number;
        this.layout = layout;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public byte[] getLayout() {
        return layout;
    }

    public void setLayout(byte[] layout) {
        this.layout = layout;
    }
}
