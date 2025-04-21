---
title: Health Management Information System Data Dictionary
description: Introduction
---

The Health Management Information System (HMIS) is designed to implement healthcare data management for various healthcare domains. This system is built for data collection, analysis, and reporting of health services and outcomes.

## Database Structure

The HMIS database consists of ten interconnected tables that capture different aspects of healthcare delivery, patient information, and population statistics.

The HMIS database consists of the following tables -

|No. | Table Name | Description |
|----|------------|-------------|
|1.| `reg_by_service` | Registry for individuals receiving healthcare services. Contains basic demographic information including registration ID, date of registration, service date, township, village, sex, age, and special population flags for migrant status, internally displaced person (IDP) status, and disability status. |
|2.| `anc` | Antenatal Care records documenting prenatal visits, including vital measurements, laboratory tests, nutrition supplements, health education topics covered, and referrals for pregnant women. |
|3.| `delivery` | Information related to childbirth events, including delivery type, maternal complications, procedures performed, and outcomes for both mother and baby. |
|4.| `pnc` | Postnatal Care data tracking follow-up care after childbirth, monitoring both maternal recovery and newborn health indicators. |
|5.| `rh` | Reproductive Health services beyond pregnancy-related care, including diagnoses, procedures, and treatments. |
|6.| `fp` | Family Planning services documenting contraceptive methods provided, counseling services, and follow-up care for family planning clients. |
|7.| `gm` | General Medical consultations recording vital signs, diagnoses, treatments, procedures, and outcomes for general health concerns. |
|8.| `lab` | Laboratory test results including hematology, urinalysis, sexually transmitted infection screening, and other diagnostic procedures. |
|9.| `beneficiaries` | Records of individuals who have received vaccinations, including demographic information, pregnancy status, conflict area residence, IDP status, disability status, and vaccination details. |
|10.| `population_projection` | Demographic data for planning purposes, providing population estimates by age groups, including specific counts for children under five years, reproductive-age women, pregnant women, and the elderly. |
